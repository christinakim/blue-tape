import os

for i in os.listdir(os.getcwd()):
    os.rename(i, "Blue_Tape_" + i)
