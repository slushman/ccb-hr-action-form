import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const buttonStyles = css`
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5;
  min-width: 64px;
  margin-right: 16px;
  padding: 4px 8px;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const buttonShadows = css`
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
`;

export const ApproveButton = styled.button`
  ${ buttonStyles }
  ${ buttonShadows }
  background-color: #43a047;

  &:hover {
    background-color: #2e7d32;
  }
`;

export const Avatar = styled.span`
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.25rem;
  height: 40px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  user-select: none;
  width: 40px;
`;

export const CenteredGrid = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin: -8px;
  margin-bottom: 1.5em;
  width: calc( 100% + 16px );
`;

export const DenyButton = styled.button`
  ${ buttonStyles }
  ${ buttonShadows }
  background-color: #e53935;

  &:hover {
    background-color: #c62828;
  }
`;

export const Fieldset = styled.fieldset`
  margin-bottom: 1.5em;
`;
Fieldset.displayName = 'Fieldset';

export const Grid = styled.div`
  box-sizing: border-box;
  flex-basis: 1000%;
  flex-grow: 0;
  margin: 0;
  max-width: 100%;
`;

export const Heading1 = styled.h1`
  color: #020202;
  display: block;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 1em;
`;
Heading1.displayName = 'Heading1';

export const Heading2 = styled.h2`
  color: #020202;
  display: block;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 1em;
`;

export const HeaderCell = styled.th`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  color: #545454;
  display: table-cell;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 56px 4px 24px;
  text-align: left;
  vertical-align: inherit;
`;

export const Legend = styled.legend``;
Legend.displayName = 'Legend';

export const Main = styled.main`
  display: block;
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 4em;
  width: auto;

  @media screen only ( min-width: 496px ) {
    margin-left: auto;
    margin-right: auto;
    width: 60rem;
  }
`;

export const NavButton = styled(NavLink)`
  ${ buttonStyles }
  align-items: center;
  background-color: #3f51b5;
  color: #fff;
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: #303f9f;
  }
`;

export const Paragraph = styled.p`
  color: #020202;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #0277bd;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  color: #fff;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5;
  min-width: 64px;
  margin-right: 16px;
  padding: 4px 8px;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  min-width: 500px;
  width: 100%;
`;

export const TableBody = styled.tbody`
  display: table-row-group;
`;

export const TableCell = styled.td`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  color: #020202;
  display: table-cell;
  font-size: 0.8125rem;
  font-weight: 400;
  padding: 4px 56px 4px 24px;
  text-align: left;
  vertical-align: inherit;
`;

export const TableFooter = styled.tfoot`
  display: table-footer-group;
`;

export const TableHead = styled.thead`
  background-color: #eff2f7;
  display: table-header-group;
`;

export const TableHeadRow = styled.tr`
  color: inherit;
  display: table-row;
  height: 56px;
  outline: none;
  vertical-align: middle;
`;

export const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  height: 56px;
  outline: none;
  vertical-align: middle;

  &:nth-of-type(odd) {
    background-color: #fafafa }
  }
`;

export const TableWrap = styled.div`
  overflow-x: auto;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  box-sizing: border-box;
  margin: auto;
  max-width: 1200px;
  padding: 48px;
`;

export const WrappingPaper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  margin-bottom: 3em;
  margin-top: 24px;
  width: 100%;
`;

export const WrapperSignIn = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  box-sizing: border-box;
  margin: auto;
  max-width: 336px;
  padding: 48px;
`;