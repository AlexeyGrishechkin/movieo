import {PaginationRounded} from '../pagination';
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'


describe.only("pagination", () => {
    test("pagination go to next page", () => {
        const history = createMemoryHistory()

        render(<PaginationRounded />)


        fireEvent.click(screen.getByLabelText("Go to next page"))


        expect(history.location.pathname).toEqual('/page=2');
    })
    // });
    // test("given only 1 parameter - returns string containing this parameter", () => {
    //   expect(checkData(100)).toBe("100 ");
    // });
    // test("given nothing - return dash", () => {
    //   expect(checkData()).toBe("-");
    // });
});
