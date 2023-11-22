import math

def recordPerCar(records):
    carRecords = {}
    
    for record in records:
        time, num, types = record.split()
        if num not in carRecords:
            carRecords[num] = time
        else:
            carRecords[num] += ' ' + time
        
    return carRecords

def calDuration(times):
    duration = 0
    times = times.split()
    
    if len(times) % 2:
        times.append('23:59')
        
    for i in range(0,len(times),2):
        inTime = times[i].split(':')
        inTime = ''.join(inTime)
        inTime = int(inTime[:2]) * 60 + int(inTime[2:])
        
        
        outTime = times[i+1]
        outTime = ''.join(outTime)
        outTime = int(outTime[:2]) * 60 + int(outTime[3:])
        
        duration += outTime-inTime
        
    return duration
    
def calFee(fees, duration):
    basicTime, basicFee, perTime, perFee = fees
    totalFee = 0
    if duration <= basicTime:
        totalFee += basicFee
    else:
        overTime = duration - basicTime
        totalFee += basicFee + math.ceil(overTime/perTime)*perFee
    
    return totalFee
    
def solution(fees, records):
    answer = []
    carRecords = recordPerCar(records)
    carList = sorted(carRecords.items())

    for car in carList:
        duration = calDuration(car[1])
        answer.append(calFee(fees, duration))
    
    return answer