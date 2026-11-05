type ButtonProps={
    text:string,
    style?: 'primary' | 'secondary' | 'danger' | 'warning' | 'cta',
    type?: 'button' | 'submit' | 'reset',
    fnClick: ()=>void
}

export default function Button({text, style='primary', type='button', fnClick}:ButtonProps) {
  return (
    <button className={style} type={type} onClick={fnClick}  >{text}</button>
  )
}
