import os


question_file = open("ienconnect_questions", "r")
question_file_data = question_file.read()
question_file.close()

number_of_questions = 0
for line in question_file_data.splitlines() :
    number_of_questions = number_of_questions + 1

training_file = open("training_data", "w")

for i in range(number_of_questions) :
    norm = 1.0 / (number_of_questions - 1)
    for j in range(number_of_questions) :
        if i != j :
            training_file.write(str(norm) + '\n')
        else :
            training_file.write('0' + '\n')

training_file.close()
