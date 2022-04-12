import { Button, Input, Space, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { useCallback, useState } from "react";
import xlsxParser from "xlsx-parse-json";

export const App = () => {
  const [data, setData] = useState([]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files![0];
      xlsxParser.onFileSelection(file).then((data: any) => {
        var parsedData: any = Object.entries(data)[0][1];
        setData(parsedData);
      });
    },
    []
  );

  return (
    <div className="App">
      <Input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />_
      {data.length ? (
        <Table dataSource={data}>
          <Column title="Имя" dataIndex="Имя" key="Имя" />
          <Column title="Фамилия" dataIndex="Фамилия" key="Фамилия" />
          <Column title="Отчество" dataIndex="Отчество" key="Отчество" />
          <Column
            title="Номер телефона"
            dataIndex="Номер телефона"
            key="Номер телефона"
          />
          <Column
            title="Действие"
            key="Действие"
            render={() => (
              <Space size="middle">
                <Button>Invite</Button>
                <Button>Delete</Button>
              </Space>
            )}
          />
        </Table>
      ) : null}
    </div>
  );
};
