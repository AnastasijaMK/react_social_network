import classes from './Pagination.module.css';
import arrowNext from "../../assets/img/arrow_next.svg";
import React from "react";

const Pagination = (props)=>{
    // Определяем видимые страницы
    let startPage = Math.max(props.currentPage - 4, 1);
    let endPage = Math.min(startPage + props.itemsPerPage - 1, props.pagesCount);

    // Корректируем начало, если конец больше общего числа страниц
    if (endPage - startPage < props.itemsPerPage - 1) {
        startPage = Math.max(endPage - props.itemsPerPage + 1, 1);
    }

    let pages = [];
    for (let i=startPage; i<=endPage; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.pagination}>
            {props.pagesCount > 9 &&
            <button className={`${classes.pagination__item} ${classes.pagination__arrow} ${classes['pagination__arrow--prev']}`}
                    onClick={() => {
                        props.changePage(props.currentPage - 1)
                    }}
                    disabled={props.currentPage < 2 ? true : false} >
                <img src={arrowNext} alt="Назад"/>
            </button>
            }

            {
                pages.map((page, index) => {
                    return (
                        <span key={page}
                              className={props.currentPage === page ? `${classes.pagination__item} ${classes['pagination__item--active']}` : classes.pagination__item}
                              onClick={() => {
                                  props.changePage(page)
                              }}>
                                    {page}
                                </span>
                    )
                })
            }

            {props.pagesCount > props.itemsPerPage &&
            <button
                className={`${classes.pagination__item} ${classes.pagination__arrow} ${classes['pagination__arrow--next']}`}
                onClick={() => {
                    props.changePage(props.currentPage + 1)
                }}
                disabled={props.currentPage === props.pagesCount ? true : false} >
                <img src={arrowNext} alt="Далее"/>
            </button>
            }
        </div>
    )
};

export default Pagination;