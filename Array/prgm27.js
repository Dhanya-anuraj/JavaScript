//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log( `district having Highest +ve case `);
pstivecase = covid_data.reduce((case1,case2)=>case1[2]>case2[2]?case1:case2)
console.log(pstivecase[1]);
console.log(`-------------------------------------------`);

//2. district having Highest 1st dose vaccine
console.log(`district having Highest 1st dose vaccine`);
fstdose = covid_data.reduce((dose1,dose2)=>dose1[5]>dose2[5]?dose1:dose2)
console.log(fstdose[1]);
console.log(`-------------------------------------------`);

//3. district having lowest death rate
console.log(`district having lowest death rate`);
dthrate = covid_data.reduce((rate1,rate2)=>rate1[3]<rate2[3]?rate1:rate2)
console.log(dthrate[1]);
console.log(`-------------------------------------------`);

//4. sort data with +ve case in descending order
console.log(` +ve case in descending order`);
pvecasedes = covid_data.sort((case1,case2)=>case2[2]-case1[2]).forEach((item)=>console.log(item[1]))       
console.log(`-------------------------------------------`);

//5. is district with +ve cases > 15000
console.log(`is district with +ve cases > 15000`);
pstvcases = covid_data.some((cases)=>cases[2]> 15000)
console.log(pstvcases?`yes`:`no`);
console.log(`-------------------------------------------`);

//6. sort data with 1st dose vaccine ascending order
console.log(`1st dose vaccine ascending order`);
frstdoseasc = covid_data.sort((dose1,dose2)=>dose1[5]-dose2[5]).forEach((item)=>console.log(item[1]))
console.log(frstdoseasc);
console.log(`-------------------------------------------`);

//7. Print Thrissur details
console.log(`Thrissur details`);
thrissur = covid_data.find((data)=>data[1]=='Thrissur')
console.log(thrissur);
console.log(`-------------------------------------------`);

//8. Print total number of positive case
console.log(`total number of positive case`);
totpstvecases = covid_data.map((cases)=>cases[2]).reduce((n1,n2)=>n1+n2)
console.log(totpstvecases);
console.log(`-------------------------------------------`);

//9. Print total number of curred cases
console.log(`total number of curred cases`);
totcrdcases = covid_data.map((curd)=>curd[4]).reduce((curd1,curd2)=>curd1+curd2)
console.log(totcrdcases);
console.log(`-------------------------------------------`);

//10. Print curred cases in Idukki
console.log(`curred cases in Idukki`);
curdcases = covid_data.find((cases)=>cases[1]=='Idukki')
console.log(curdcases[4]);
