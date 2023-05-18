import { useEffect, useState } from "react"
import UseValidateField from "../../hooks/useValidateField";

const InputForm = ({ typeField, labelText, required, setData, maxLength = 9999, upLabelField = true }) => {

  const [error, setError] = useState({ status: false, value: "" });
  const [valueField, setValueField] = useState("");
  const [upLabel, setUpLabel] = useState(upLabelField);

  useEffect(() => {

    if(valueField) return onBlurListener(valueField);

  }, [valueField]);

  useEffect(() => {    
    if(!error.status) return setData({error: error.status, data: valueField});
  }, [error])
  


  const handleChange = (value) => setValueField(value);

  const onFocusListener = () => {
    if(!upLabelField){
      !upLabel && setUpLabel(!upLabel);
    }
  };
  
  const onBlurListener = (value) => {
    UseValidateField(typeField, setError, valueField, required);
    if(!upLabelField){
      if(value){
        return setUpLabel(true);
      }
      return setUpLabel(false);
    }
  }


  return (
    <label className='pt-6 pb-3 w-full flex flex-col relative gap-1 outline-none h-fit'>
      <span className={`
        pointer-events-none translate-y-9 text-sm font-medium absolute h-fit m-auto top-0 inset-x-3 transition-all duration-300 
        ${upLabel ? "text-orange translate-y-0" : "text-black-500 text-opacity-70 pl-2"}`}>
        {labelText}
      </span>
      <input
        type={typeField}
        required={required}
        className={`text-orange py-2.5 px-4 outline-none rounded-lg text-sm border ${upLabel ? 'border-orange' : 'border-black-500 border-opacity-50'}`}
        value={valueField}
        onChange={(e) => handleChange(e.currentTarget.value)}
        onFocus={(e) => onFocusListener(e.currentTarget.value)}
        onBlur={(e) => onBlurListener(e.currentTarget.value)}
      />
      {
        error.status && <span className=' px-2 text-[13px] font-medium text-rose-600'>
          {error.value}
        </span>
      }
    </label>
  )
}

export default InputForm