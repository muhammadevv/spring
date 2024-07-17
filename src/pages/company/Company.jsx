import React from "react";
import OurColleagues from "../section/OurColleagues";
import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard";

function Company() {
  const { t } = useTranslation();

  return (
    <div className="company">
      <div className="container">
        <div className="company-row">
          <div className="company-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYNomj0vwSBD9fsCxnoUVBzXCRm_4h0Mz2Q&s"
              alt=""
            />
          </div>
          <div className="company-text">
            <div className="banner_item_text">
              <p value="en">
                {t("title")}
              </p>
            </div>
          </div>
        </div>
        <ProductCard />
        {/* <OurColleagues /> */}
      </div>
    </div>
  );
}

export default Company;
