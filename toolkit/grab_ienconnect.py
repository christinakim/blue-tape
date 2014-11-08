import os
from subprocess import call

os.chdir("C:\\Users\\rin\\Documents\\Blue_Tape\\ienconnect")

ienconnect_base = "ienconnect.custhelp.com/app/answers/detail/a_id/"
wget_caller = "\"C:\\Program Files (x86)\\GnuWin32\\bin\\wget.exe\""
output_argument = "--output-document=ienconnect"

list_of_files = []
list_of_questions = []

for i in range(1,615):
    temp_output_argument = output_argument + str(i)
    temp_ienconnect_base = ienconnect_base + str(i)
    os.system(wget_caller + " " + temp_output_argument + ".html " + temp_ienconnect_base)
    f = open("ienconnect" + str(i) + ".html", 'r')
    list_of_files.append("ienconnect" + str(i) + ".html")
    file_data = f.read()
    f.close()
    if "<h1>Not available</h1>" in file_data :
        os.remove("ienconnect" + str(i) + ".html")
        list_of_files.remove("ienconnect" + str(i) + ".html")
        print "file deleted"

for file_i in list_of_files :
    f = open(file_i, 'r')
    file_data = f.read()
    f.close()
    file_lines = file_data.splitlines()
    output_data = "<!DOCTYPE html> <html> <head><title> " + file_i + "</title></head><body> "
    footer = " </body> </html>"
    j = 0
    for line in file_lines :
        if j == 6 :
            list_of_questions.append(line)
        if j > 0 :
            if j < 10 :
                output_data = output_data + line
            j = j + 1
        if "rn_AnswerDetail" in line :
            j = 1
    output_data = output_data + footer
    f = open(file_i, 'w')
    f.write(output_data)
    f.close()

f = open("ienconnect_questions", "w")
f.write("\n".join(list_of_questions))
f.close()
