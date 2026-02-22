#POLYMORPHISM 

class messanger:
    def use_keyboard(self):
        print("keyboard is used to type")
    def send_message(self):
        print("message sent successfully")
    def receive_message(self):
        print("message received successfully")
class whatsappmessanger(messanger):
    def send_message(self):
        print("whatsapp message sent successfully WA")
    def receive_message(self):
        print("whatsapp message received successfully WA")
class telegrammessanger(messanger):
    def send_message(self):
        print("telegram message sent successfully TGM")
    def receive_message(self):
        print("telegram message received successfully TGM")
class instagrammessanger(messanger):
    def send_message(self):
        print("instagram message sent successfully INSTA")
    def receive_message(self):
        print("instagram message received successfully INSTA")
w=whatsappmessanger()
w.use_keyboard()
w.send_message()
w.receive_message()
t=telegrammessanger()
t.use_keyboard()
t.send_message()
t.receive_message()
i=instagrammessanger()
i.use_keyboard()
i.send_message()
i.receive_message()

#ENCAPSULATION
class information:
    def marks(self):
        print("marks obtained in exam is 95")
    def send(self):
        print("marks sent to parents successfully")
    def ins(self,m):
        self.marks=m
        print("marks obtained in exam is",self.marks)
end=information()
end.send()
end.marks()
end.ins(5000)

#INHERITANCE
class marks:
    def total_marks(self):
        print("total marks obtained in exam is 480")
class student(marks):
    def student_name(self):
        print("student name is Dinesh")
m=student()
m.student_name()