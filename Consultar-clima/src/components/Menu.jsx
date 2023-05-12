import { useRef } from 'react';
import style from '../Styles/Menu.css'

const Menu = ({setPronosticar}) => {

    const resetData = ()=>{
        localStorage.removeItem('lugar')
        location.reload()
    }    

    const newLocation = ()=>{
        localStorage.removeItem('lugar')
        setPronosticar(true)
    }    

    const toggleRef = useRef(null);

    const hasClass = (elem, className) => {
      return elem && new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    };
  
    const addClass = (elem, className) => {
      if (elem && !hasClass(elem, className)) {
        elem.className += ' ' + className;
      }
    };
  
    const removeClass = (elem, className) => {
      if (elem) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
      }
    };
  
    const toggleClass = (elem, className) => {
      if (elem) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
          elem.className += ' ' + className;
        }
      }
    };
  
    const onClickToggle = () => {
      toggleClass(toggleRef.current, 'on');
      return false;
    };


  return (
    <>
        <button id="toggle" ref={toggleRef} onClick={onClickToggle}><span></span></button>
        <div id="menu">
            <ul>
                <li onClick={resetData}><a href="#about">Reset</a></li>
            </ul>
        </div>
    </>
  )
}

export default Menu