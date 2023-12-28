"use client"
import MealItem from "./meal-item";
import { useEffect, useState } from 'react';
import classes from "./meals-grid.module.css";
import { db } from "@/firebase/firebase.config";
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
const MealsGrid = ({ meals }) => {
  const [formalAdv, setFormalAdv] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFormalAdvert = async () => {
      const q = query(
        collection(db, "gundem"),
        orderBy("datePublished", "desc"),
        limit(50)
      );
      try {
        var formalAdvArr = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data().active) {
            formalAdvArr.push({ ...doc.data(), doc: doc.id });
          }
        });
        setFormalAdv(formalAdvArr);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchFormalAdvert();
  }, []);


  return (
    <ul className={classes.meals}>
      {formalAdv.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
