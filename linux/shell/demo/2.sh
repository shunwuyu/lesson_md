#!/bin/bash
# menu deom
cat << EOF
(1)show memory info
(2)show cpu info
(*)quit
EOF

read -p "Enter the correspong numbe  to display the corresponding information, or enter any character to exit." number

if [ $number == 1 ]; then
    free -h
elif [ $number == 2 ]; then
    lscpu
fi