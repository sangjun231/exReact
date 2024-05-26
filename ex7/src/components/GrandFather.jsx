import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext.js";

function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return (
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />
    </FamilyContext.Provider>
  );
}

export default GrandFather;
