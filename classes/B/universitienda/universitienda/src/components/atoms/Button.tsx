
type ButtonProps ={
    text: string,
    type?: 'button'|'submit' | 'reset',
    style?:'primary' | 'secondary' | 'danger' | 'alert',
    fnClick: () => void
}

export default function Button({text, type='button', fnClick, style='primary'}:ButtonProps ) {
  return (
    <button type={type} className={style} onClick={fnClick}>{text}</button>
  )
}
