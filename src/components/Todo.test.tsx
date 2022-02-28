import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from '../components/Todo';

describe('Todo components テスト', () => {
  it('初期状態でdisabledになっているか', () => {
    render(<Todo />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
  it('inputに値を入力するとボタンのdisabledが解除されるか', () => {
    render(<Todo />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.type(input, 'hoge');
    expect(button).not.toBeDisabled();
  });
  it('ボタンをクリックするとTodoが追加されるか', () => {
    render(<Todo />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    const listitem = screen.getAllByRole('listitem');
    userEvent.type(input, 'hoge');
    userEvent.click(button);
    const listitemAfterClickd = screen.getAllByRole('listitem');
    expect(listitemAfterClickd.length).toBeGreaterThan(listitem.length);
    expect(
      listitemAfterClickd[listitemAfterClickd.length - 1].textContent
    ).toEqual('hoge');
  });
});
