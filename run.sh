#!/bin/bash
docker build -t beacon .
docker run -p 1234:1234 beacon
