import {RatingFilm} from "../raitingFilm";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


describe("rating film", () => {
    test("checkData givens 2 parameters - returns containing these parameters as string", () => {
        render(<RatingFilm rating={0}/>)


        expect(screen.queryByTestId('rating-film')).not.toBeInTheDocument()
    })
    // });
    // test("given only 1 parameter - returns string containing this parameter", () => {
    //   expect(checkData(100)).toBe("100 ");
    // });
    // test("given nothing - return dash", () => {
    //   expect(checkData()).toBe("-");
    // });
});
