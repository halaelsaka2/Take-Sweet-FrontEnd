import React from "react";
import _ from "lodash";

const Paging = props => {
  var { count, pagesize, current, onChange } = props;
  const pageNum = count / pagesize;
  const pages = _.range(1, pageNum + 1);

  return (
    <div className="paging">
      <div className="paging__arrow">
        <i
          className="fas fa-angle-left"
          style={{ cursor: "pointer" }}
          onClick={current => onChange(current--)}
        ></i>
      </div>
      {pages.map(page => (
        <div
          key={page}
          className={
            page === current ? "paging__number active" : "paging__number"
          }
          style={{ cursor: "pointer" }}
          onClick={current => onChange(page)}
        >
          {page}
        </div>
      ))}
      <div className="paging__arrow">
        <i
          className="fas fa-angle-right"
          style={{ cursor: "pointer" }}
          onClick={() => onChange(current++)}
        ></i>
      </div>
    </div>
  );
};
export default Paging;

//import paging

// class App extends Component {
//   state = {
//     count: 100,
//     pageSize: 10
//   };
//   handlePaging = page => {
//     //change current page
//     this.setState({ currentPage: page });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.pageSize < this.state.count && (
//           <Paging
//             count={100}
//             pagesize={10}
//             current={1}
//             onChange={this.handlePaging}
//           />
//         )}
//       </React.Fragment>
//     );
//   }
// }

{
  /* <Paging
  count={products.length}
  pagesize={pageSize}
  current={currentPage}
  onChange={this.handlePaging}
/>; */
}
