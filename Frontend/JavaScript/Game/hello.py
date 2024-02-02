def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 5)
def check_winner(board, player):
    for i in range(3):
        if all(cell == player for cell in board[i]) or all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False
def is_board_full(board):
    return all(cell != ' ' for row in board for cell in row)
def tic_tac_toe():
    board = [[' ' for _ in range(3)] for _ in range(3)]
    players = ['X', 'O']
    current_player = 0
    while True:
        print_board(board)
        row = int(input(f"Player {players[current_player]}, enter row (0, 1, or 2): "))
        col = int(input(f"Player {players[current_player]}, enter column (0, 1, or 2): "))
        if board[row][col] == ' ':
            board[row][col] = players[current_player]
            if check_winner(board, players[current_player]):
                print_board(board)
                print(f"Player {players[current_player]} wins!")
                break
            elif is_board_full(board):
                print_board(board)
                print("It's a tie!")
                break
            else:
                current_player = 1 - current_player
        else:
            print("Cell already occupied. Try again.")
if __name__ == "__main__":
    tic_tac_toe()