import React, { useCallback, useState } from "react";
import xlsxParser from "xlsx-parse-json";

export const App = () => {
  const [isReading, setIsReading] = useState(false);

  const handleFileChange = useCallback((e: any) => {
    const file = e.target.files[0];
    xlsxParser.onFileSelection(file).then((data: any) => {
      var parsedData = data;

      console.log(parsedData);
      setIsReading(true);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
      {isReading ? <p>Reading...</p> : null}
    </div>
  );
};
