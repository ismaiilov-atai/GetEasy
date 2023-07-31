import { useEffect, useState } from "react"
import apiService from "../../utils/api-service";
import Item from "./item";
import styles from '../../styles/Items.module.css';


export default function Items({ isOwnItems }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (isOwnItems) {
      apiService.getOwnItems().then(data => setItems(data));
    } else apiService.getAllItems().then(data => setItems(data));
  }, [isOwnItems])

  const itemsHTML = items.length && items.map((item, indx) => <Item key={indx} item={item} />)

  return (
    <div className={styles.items_contaner}>
      {
        itemsHTML
      }
    </div>
  )
}