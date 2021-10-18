import React, { useEffect } from "react";
import { IMG_URL } from "../utils/constants";
import { inject, observer } from "mobx-react";
import styled, { css } from "styled-components";
import moment from "moment";
import { checkData } from "../utils/helpers/checkData";
import { switchProp } from "styled-tools";
import { describeRating } from "../utils/helpers/describeRating";
import { minuteToHours } from "../utils/helpers/minuteToHours";
import { expandList } from "../utils/helpers/expandList";
import { Loader } from "../components/loader";

const MovieWrapper = styled.main`
  padding: 40px 0 60px;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const PosterAside = styled.aside`
  display: flex;
  width: 400px;
`;

const PosterOnDescription = styled.img`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100%;
  border-radius: 3px;
  object-fit: cover;
  margin-left: 40px;
  width: 400px;
  height: 600px;
`;

const EmptyZone = styled.div`
  flex: 0 0 100px;
  width: 30px;
`;

const MovieTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.5px;
  margin: 0;
`;

const InformationCol = styled.article`
  display: flex;
  flex-direction: column;
  width: 600px;

  p {
    margin: 16px 0 24px;
    font-size: 18px;
    line-height: 24px;
  }

  span {
    font-size: 15px;
  }
`;

const Text = styled.span`
  width: 120px;
  font-size: 13px;
  line-height: 16px;
  opacity: 0.4;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  line-height: 16px;
  padding: 10px 0;
`;

const VoteAverage = styled.span`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-bottom: 15px;
  padding-top: 28px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;

  ${switchProp("describeRating", {
    good: css`
      color: #3bb33b;
    `,
    bad: css`
      color: #f00;
    `,
    normal: css`
      color: #aaa;
    `,
    unknown: css`
      color: #aaa;
    `,
  })}
  span {
    font-size: 20px;
    color: #1f1f1f;
  }
`;

const GoBackBtn = styled.button`
  color: grey;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const MovieDescription = (props) => {
  const {
    MovieStore: { movie, loading },
    match: { params },
    history,
  } = props;

  useEffect(() => {
    const { MovieStore } = props;

    MovieStore.getMovieByID(params.name);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <MovieWrapper>
      {loading.gettingMovie ? (
        <Loader />
      ) : (
        <>
          <PosterAside>
            <PosterOnDescription
              src={IMG_URL + movie.poster_path}
              alt={movie.title}
            />
          </PosterAside>
          <EmptyZone />
          <InformationCol>
            <MovieTitle>{movie.title}</MovieTitle>
            <p>{movie.tagline}</p>
            <h3>About</h3>
            <Info>
              <Text>Release date</Text>
              {moment(movie.release_date).format("YYYY")}
            </Info>
            <Info>
              <Text>Country</Text>
              {expandList(movie.production_countries)}
            </Info>
            <Info>
              <Text>Genres</Text>
              {expandList(movie.genres)}
            </Info>
            <Info>
              <Text>Original title</Text>
              {movie.original_title}
            </Info>
            <Info>
              <Text>Budget</Text>
              {checkData(movie.budget, "$")}
            </Info>
            <Info>
              <Text>Revenue</Text>
              {checkData(movie.revenue, "$")}
            </Info>
            <Info>
              <Text>Film duration</Text>
              {checkData(
                movie.runtime,
                `min. / ${minuteToHours(movie.runtime)}`
              )}
            </Info>
            <h3>Overview</h3>
            <span>{movie.overview}</span>
          </InformationCol>
          <EmptyZone />
          <VoteAverage describeRating={describeRating(movie.vote_average)}>
            <GoBackBtn onClick={goBack}>Back to menu</GoBackBtn>
            {movie.vote_average ? (
              <>
                {movie.vote_average}
                <span>{movie.vote_count} rated</span>
              </>
            ) : (
              <span>Status: {movie.status}</span>
            )}
          </VoteAverage>
        </>
      )}
    </MovieWrapper>
  );
};

export default inject("MovieStore")(observer(MovieDescription));
