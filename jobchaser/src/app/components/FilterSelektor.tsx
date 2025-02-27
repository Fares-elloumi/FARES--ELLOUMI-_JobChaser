"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../redux/store";
import { setCategory } from "./../redux/slices/filterSlice";

const roles = ["Frontend", "Backend", "Fullstack"];

export default function FilterComponent() {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.filter.category);

  return (
    <div className="filter-container">
      {roles.map((role) => (
        <button
          key={role}
          className={`filter-button ${category === role ? "active" : ""}`}
          onClick={() => dispatch(setCategory(category === role ? null : role))}
        >
          {role}
        </button>
      ))}
    </div>
  );
}

