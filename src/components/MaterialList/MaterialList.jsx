import {Material} from '../Material/Material';

export const MaterialList = ({items, ...othetProps}) => {
   return ( 
   <ul>
      {items.map(item => (
      <li key={item.id}>
         <Material item={item} {...othetProps}/>
         <hr/>
        </li>
        ))}
   </ul>
   )
  
}