
type ButtonProps= {
    text: string,
    type?:'button' | 'submit' | 'reset',
    style?: 'primary' | 'secondary' | 'cta' | 'danger' | 'warning',
    fnClick: ()=>void 
}

export default function Button({text, type='button', style='primary', fnClick}:ButtonProps) {
  return (
    <button className={style} type={type} onClick={fnClick} >
        {text}
    </button>
  )
}


