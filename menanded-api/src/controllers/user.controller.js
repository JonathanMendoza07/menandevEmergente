const { response } = require('express');
const sql = require('mssql');
const getConnection = require('../config/dbconnect');
const connection = require('../config/dbconnect');


const GetOneUser = async (req, res = response) => {

    await checkUserById(req.decoded_id)
        .then(resp => {
            const { message, data } = resp;

            if (data.length > 0) {
                return res.status(200).json(resp);
            }
            return res.status(404).json({ message });
        })
        .catch(err => { return res.status(500).json(err) });

}

const UpdateDataUser = async (req, res = response) => {

    const id = req.decoded_id;
    const { fname, lname, email, cell, cedula } = req.body;

    const dataUser = await checkUserById(id)
        .then(data => {
            if (data.data.length === 0){
                return res.status(404).json(existUser);
            }
            return data.data[0];
        })

    const existNewEmailDB = await verifyExistEmail(email, id, res);

    if (!existNewEmailDB) {
        const { user_lname, user_email, user_cell, user_cedula } = dataUser;

        let query = `UPDATE "User" SET 
        user_fname = '${fname}'
        ${user_lname !== lname ? ", user_lname = '" + lname + "'" : ""}
        ${user_email !== email ? ", user_email = '" + email + "'" : ""}
        ${user_cell !== cell ? ", user_cell =  '" + cell + "'" : ""}
        ${user_cedula !== cedula ? ", user_cedula = '" + cedula + "'" : ""}
        WHERE user_id = '${id}'`;

        const pool = await getConnection();
        await pool
            .request()
            .query(query)
            .then(resp => {
                return res.status(200).json({ message: "Datos del usuario actualizados", data: req.body });
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({ message: "Ocurrio un error inesperado" });
            });
    }

}


// PAYMENTS CARDS
const GetPaymentCards = async (req, res = response) => {

    const id = Number(req.decoded_id);

    let query = `SELECT 
        card_id as id,
        card_name as nameCard,
        card_number as numberCard,
        card_email_to_notif as email,
        card_date_exp as date_exp,
        card_cvc as cvc
    FROM "PaymentCard"
    INNER JOIN "User" ON "User".user_id = PaymentCard.card_user_id
    WHERE user_id = @_id`;

    const pool = await getConnection();
    await pool
        .request()
        .input('_id', sql.Int, id)
        .query(query)
        .then(resp => {
            const { recordset } = resp;
            return res.status(200).json({message: "OK, Datos obtenidos", data: recordset});
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({message: "Ocurrio un error inesperado"});
        });

}

const GetCardByID = async (req, res = response) => {
    
    const id_user = req.decoded_id;
    const { id } = req.params;

    const dataUser = await checkUserById(id_user)
        .then(resp => {
            const { data } = resp;

            if(data.length === 0) return res.status(404).json({message: "El usuario del key no existe"});
            return data;
        });

    if(dataUser.length > 0){

        let query = `SELECT 
            card_id as id,
            card_name as nameCard,
            card_number as numberCard,
            card_email_to_notif as email,
            card_date_exp as date_exp,
            card_cvc as cvc
        FROM "PaymentCard"
        INNER JOIN "User" ON "User".user_id = PaymentCard.card_user_id
        WHERE user_id = @_id AND card_id = @id_card`

        const pool = await getConnection();
        await pool
            .request()
            .input('_id', id_user)
            .input('id_card', id)
            .query(query)
            .then(data => {
                const { recordset } = data;

                if(recordset.length > 0) return res.status(200).json({message:"Datos obtenidos correctamente", data: recordset});
                
                return res.status(404).json({message:"No se encontro la tarjeta buscada"});
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({message: "Ocurrio un error inesperado"});
            });
        
    }    
    
}

const SaveNewPaymentCard = async (req, res = response) => {

    const userId = req.decoded_id;
    const { name_card, num_card, date_exp, email, cvc } = req.body;

    const dataUser = await checkUserById(userId)
        .then(resp => {
            const { data } = resp;

            if(data.length === 0) return res.status(404).json({message: "El usuario del key no existe"});
            return data;
        });

    if(dataUser.length > 0){

        let query = `SELECT CASE 
            WHEN @card = (SELECT card_number FROM PaymentCard
                INNER JOIN "User" ON "User".user_id = PaymentCard.card_user_id
                WHERE card_number = @card AND card_user_id = @_id)
            THEN 'true' ELSE 'false'
        END AS value`;

        const pool = await getConnection();
        const exitCard = await pool
            .request()
            .input('_id', userId)
            .input('card', num_card)
            .query(query)
            .then(resp => resp.recordset[0].value === "true"? true : false)
            .catch(err=>{
                console.log(err);
                return res.status(500).json({message: "Ocurrio un error inesperado"});
            })

        if(!exitCard){

            query = `INSERT INTO PaymentCard (
                card_name, card_number, card_email_to_notif,
                card_date_exp, card_cvc, card_user_id) 
            VALUES (@nameCard, @numberCard, @email_notif, @dateExp, @code, @_id);`;

            await pool
                .request()
                .input('nameCard', name_card)
                .input('numberCard', num_card)
                .input('email_notif', email)
                .input('dateExp', date_exp)
                .input('code', cvc)
                .input('_id', userId)
                .query(query)
                .then(resp => {
                    return res.status(200).json({message:"Tarjeta agregada correctamente", data: resp.recordset});
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).json({message: "Ocurrio un error inesperado"});
                })

        }
        return res.status(403).json({message: "La tarjeta ya fue agregada anteriormente"});

    }


}

const DeletePaymentCard = async (req, res = response) => {

    const id_user = req.decoded_id;
    const { id } = req.params;

    const dataUser = await checkUserById(id_user)
        .then(resp => {
            const { data } = resp;

            if(data.length === 0) return res.status(404).json({message: "El usuario del key no existe"});
            return data;
        });

    if(dataUser.length > 0){

        let query = `DELETE FROM PaymentCard WHERE card_id = @_id`;

        const pool = await getConnection();
        await pool
            .request()
            .input('_id', id)
            .query(query)
            .then(resp => {
                const { rowsAffected } = resp;

                if(rowsAffected[0] === 1) return res.status(200).json({message: "Tarjeta eliminada correctamente"});
                return res.status(404).json({message: "La tarjeta no se encontro, por lo tanto no eliminó nada"});
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({message: "Ocurrio un error inesperado"});
            });

    }

}



/*  REQUEST HOOK */
const checkUserById = async (id) => {
    let query = `SELECT * FROM "User" WHERE user_id = @id`;

    const pool = await getConnection();
    const resp = await pool
        .request()
        .input('id', sql.VarChar, id)
        .query(query)
        .then((data) => {
            return { message: "¡Consulta correcta!", data: data.recordset };
        })
        .catch((err) => {
            console.log(err);
            return { message: "Se presento un error inesperado" };
        });

    return resp;
}

const verifyExistEmail = async (email, id, res) => {

    const query = `SELECT CASE
        WHEN @email = (SELECT user_email FROM "User" WHERE user_email = @email AND NOT user_id = 4) THEN 'true'
        WHEN @email = (SELECT user_email FROM "User" WHERE user_id = @_id) THEN 'false'
        ELSE 'false'
    END AS exist;`;

    const pool = await getConnection();
    const resp = await pool
        .request()
        .input('email', sql.VarChar, email)
        .input('_id', sql.Int, Number(id))
        .query(query)
        .then((data) => {
            const { recordset } = data;
            const exist = recordset[0].exist === "true"? true : false;
            
            if(exist){ 
                return res.status(400).json({ message: "El correo ingresado ya se encuentra registrado." });
            }
            return exist;
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ message: "Ocurrio un error inesperado." });
        });

    return resp;
}

const NewUser = async ( req, res = response) =>{
    const {user_tipo_user_id,user_nombre, user_apellido, user_genero, user_correo, user_telefono, user_cedula }=req.body;
      const query =`INSERT INTO "Usuario"(
      user_tipo_user_id,
      user_nombre,
      user_apellido, 
      user_genero, 
      user_correo, 
      user_telefono, 
      user_cedula) 
      values (@tipo ,@nombre, @apellido, @genero, @correo, @telefono, @cedula)`;
    
    const pool = await connection();
    const resp = await pool
      .request()
      .input('tipo', sql.Int, user_tipo_user_id)
      .input('nombre', sql.VarChar, user_nombre)
      .input('apellido', sql.VarChar, user_apellido)
      .input('genero', sql.VarChar, user_genero)
      .input('correo', sql.VarChar, user_correo)
      .input('telefono', sql.Char, user_telefono)
      .input('cedula', sql.Char, user_cedula)
      .query(query)
      .then(data => {
        return res.status(200).json({ message: "Usuario Guardada", data: req.body});
      })
      .catch(err =>{ 
        console.log(err)
        return res.status(500).json({message: "Ocurrio un error inesperado"});
      });
  }


module.exports = {
    GetOneUser,
    UpdateDataUser,
    GetPaymentCards,
    GetCardByID,
    SaveNewPaymentCard,
    DeletePaymentCard,
    NewUser,
}