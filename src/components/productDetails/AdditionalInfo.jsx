import React from "react";

export default function AdditionalInfo() {
  return (
    <table className="tb-info-product text-md">
      <tbody>
        <tr className="tb-attr-item">
          <th className="tb-attr-label">Material</th>
          <td className="tb-attr-value">
            <p>Stainless Steel</p>
          </td>
        </tr>
        <tr className="tb-attr-item">
          <th className="tb-attr-label">Number of Hooks	</th>
          <td className="tb-attr-value">
            <p>10</p>
          </td>
        </tr>
        <tr className="tb-attr-item">
          <th className="tb-attr-label">Color</th>
          <td className="tb-attr-value">
            <p>Transparent</p>
          </td>
        </tr>
        <tr className="tb-attr-item">
          <th className="tb-attr-label">Dimensions</th>
          <td className="tb-attr-value">
            <p>6 x 6 x 2 Centimeters</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
