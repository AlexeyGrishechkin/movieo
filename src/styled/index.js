import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  font-family: Tahoma, sans-serif;
`;

export const Header = styled.header`
  padding: 1rem 3rem;
  display: flex;
  justify-content: flex-start;
  background-color: #1f1f1f;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
`;

export const Movies = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: #f4f4f4;
`;

export const Movie = styled.article`
  display: flex;
  color: rgba(31, 31, 31, 0.9);
  flex-wrap: wrap;
  justify-content: center;
  width: 200px;
  height: 360px;
  margin: 1rem;
  border-radius: 3px;
  background-color: var(--secondary-color);
  position: relative;
  cursor: pointer;

  &:hover {
    span {
      color: #daa520;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Rating = styled.div`
  border-radius: 2px;
  position: absolute;
  left: -5px;
  top: 5px;
  font-size: 15px;
  font-family: Tahoma, sans-serif;
  padding: 3px 5px;
  z-index: 5;
  color: #fff;

  ${switchProp("colorRating", {
    good: css`
      background: #3bb33b;
    `,
    bad: css`
      background: #f00;
    `,
    normal: css`
      background: #aaa;
    `,
  })};
`;

export const Poster = styled.img`
  width: 95%;

  &:hover {
    width: 100%;
  }
`;

export const Genre = styled.div`
  margin-top: 5px;
  font-size: 13px;
  line-height: 14px;
  color: #1f1f1f;
  opacity: 0.4;
  text-align: center;
`;

export const MovieName = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #060077;
  margin-top: 6px;
  font-weight: 400;
  text-align: center;
`;

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
