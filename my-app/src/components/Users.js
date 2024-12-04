import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
  const navigate = useNavigate();

  // 데이터 및 테이블 설정
  const columns = [
    {
      Header: "이름",
      accessor: "username", // 데이터의 키
    },
    {
      Header: "이메일",
      accessor: "email",
    },
    {
      Header: "가입일",
      accessor: "createdAt",
      Cell: ({ value }) => new Date(value).toLocaleDateString(), // 날짜 포맷팅
    },
  ];

  // React Table Hook 사용
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  //   canPreviousPage,
  //   canNextPage,
  //   pageCount,
  //   pageIndex,
  //   pageSize,
  //   setPageSize,
  //   gotoPage,
  //   nextPage,
  //   previousPage,
  //   pageOptions,
  // } = useTable(
  //   {
  //     columns,
  //     data: users,
  //     initialState: { pageIndex: 0 }, // 초기 페이지 설정
  //   },
  //   usePagination // 페이지네이션 훅 사용
  // );

  // 사용자 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users`);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [API_URL]);

  return (
    <div className="users-container">
      <h1>회원 목록</h1>
      {/* {loading ? (
        <p>로딩 중...</p>
      ) : (
        <table {...getTableProps()} className="users-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )} */}

      {/* 페이지네이션 버튼 */}
      {/* <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          이전
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          다음
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>

        <span>
          {pageIndex + 1} 페이지 중 {pageCount} 페이지
        </span>
        { <select
          value={pageSize}
          onChange={(e) => {
            const size = Number(e.target.value);
            setPageSize(size);
          }}
        >
          {[5, 10, 15].map((size) => (
            <option key={size} value={size}>
              {size}개씩 보기
            </option>
          ))}
        </select> }
      </div> */}

      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
};

export default Users;
