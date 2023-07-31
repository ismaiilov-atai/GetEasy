import { useEffect, useState } from "react"
import apiService from "../../utils/api-service";
import Item from "./item";
import styles from '../../styles/Items.module.css';


export default function Items({ isOwnItems }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    apiService.getAllItems().then(data => setItems(data));
  }, [])

  const itemsHTML = items.map((item, indx) => <Item key={indx} item={item} />)

  return (
    <div className={styles.items_contaner}>
      {
        itemsHTML
      }
    </div>
  )
}