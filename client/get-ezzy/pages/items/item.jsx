import { useEffect, useState } from 'react';
import styles from '../../styles/Items.module.css';
import apiService from '../../utils/api-service';
import Image from 'next/image';
import nextIcon from '../../public/images/next.svg'

export default function Item({ item }) {

  const [pointA, setPointA] = useState()
  const [pointB, setPointB] = useState()

  useEffect(() => {
    for (let i = 0; i < item.addresses.length; i++) {
      apiService.getPlacesNames(item.addresses[i].lat, item.addresses[i].lng)
        .then(data => {
          if (i === 0) setPointA(data);
          if (i === 1) setPointB(data);
        });
    }
  }, []);


  return (
    <div className={styles.item_card}>

      <Image className={styles.btn_details} src={nextIcon} />

      <div className={styles.title_description_container}>
        <div><strong>name:</strong> {item.name}</div>
        <p><strong>description:</strong>  {item.description}</p>
      </div>

      <div className={styles.destination_container}>

        <div className={styles.address_holder}>
          <figcaption>Pick up:</figcaption>
          <p>
            {
              pointA?.results[0]?.formatted_address
            }
          </p>
        </div>

        <div className={styles.path_icon}>
          -  -  -  -  -  -  {">"}
        </div>

        <div className={styles.address_holder}>
          <figcaption>drop off:</figcaption>
          <p>
            {
              pointB?.results[0]?.formatted_address
            }
          </p>
        </div>

      </div>

    </div>
  )
}