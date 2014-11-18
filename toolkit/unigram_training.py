import os

sigma = 0.1

question_file = open("ienconnect_questions", "r")
question_file_data = question_file.read()
question_file.close()

list_of_questions = []
number_of_questions = 0
for line in question_file_data.splitlines() :
    list_of_questions.append(line)
    number_of_questions = number_of_questions + 1

training_file = open("training_data", "r")
training_data = training_file.read()
training_file.close()

training_lines = training_data.splitlines()
training_file = open("training_data", "w")
for i in range(number_of_questions) :
    training_question = list_of_questions[i]
    index_begin = number_of_questions * i
    index_end = number_of_questions * (i + 1)
    training_set = []
    training_set[0:(number_of_questions - 1)] = training_lines[index_begin : index_end]
    norm_sum = 0
    for j in range(number_of_questions) :
        if j != i :
            comparison_question = list_of_questions[j]
            training_datum = training_set[j]
            unigram_similarity = 0
            list_of_words = []
            for word in training_question.split(" ") :
                if word not in list_of_words :
                    list_of_words.append(word)
                    if word in comparison_question.split(" ") :
                        unigram_similarity = unigram_similarity + 1
            training_datum = float(training_datum) * (1.0 + unigram_similarity*sigma)
            training_set[j] = training_datum
            norm_sum = norm_sum + training_datum
        else :
            training_set[j] = 0
    for j in range(number_of_questions) :
        training_set[j] = float(training_set[j]) / norm_sum
        training_file.write(str(training_set[j]) + '\n')

training_file.close()
