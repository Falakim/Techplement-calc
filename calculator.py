import math

history = []

def evaluate_expression(expression):
    try:
        result = eval(expression)
        history.append(expression + " = " + str(result))
        return result
    except:
        return "Error"

def calculate():
    expression = display.get()
    result = evaluate_expression(expression)
    display.delete(0, 'end')
    display.insert('end', str(result))
    result_area.config(text="Result: " + str(result))

def clearDisplay():
    display.delete(0, 'end')
    result_area.config(text="Result: ")

def deleteLast():
    current_display = display.get()
    display.delete(len(current_display) - 1)

def viewHistory():
    history_window = Tk()
    history_window.title("History")
    for item in history:
        Label(history_window, text=item).pack()

from tkinter import Tk, Entry, Button, Label

root = Tk()
root.title("Scientific Calculator")

display = Entry(root, font=("Arial", 20))
display.grid(row=0, column=0, columnspan=4)

result_area = Label(root, text="Result: ")
result_area.grid(row=1, column=0, columnspan=4)

button_clear = Button(root, text="C", command=clearDisplay)
button_clear.grid(row=2, column=0)

button_delete = Button(root, text="DEL", command=deleteLast)
button_delete.grid(row=2, column=1)

button_history = Button(root, text="History", command=viewHistory)
button_history.grid(row=2, column=2)

# Rest of the buttons and their functionality remain the same

root.mainloop()
