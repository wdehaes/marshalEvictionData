library(dplyr)
install.packages("jsonlite")
library(jsonlite)
library(stringr)
evictionTable <- read.csv("C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/Marshal Evictions/Evictions.csv") #imports marshal eviction data CSV. Change this to your file path
evictionTable$EXECUTED_DATE <- as.Date(evictionTable$EXECUTED_DATE, format = "%m/%d/%Y") #changes the executed date type from factor to date. this will allow for better manipulations.

commercialEvictions <- evictionTable[evictionTable$RESIDENTIAL_COMMERCIAL_IND == "Commercial",] #Only Commercial Evictions
residentialEvictions <- evictionTable[evictionTable$RESIDENTIAL_COMMERCIAL_IND != "Commercial",] #Only Residential Evictions

residentialEvictiontable_2017_withDups <- residentialEvictions[residentialEvictions$EXECUTED_DATE >= "2017-01-01" & residentialEvictions$EXECUTED_DATE <= "2017-12-31",] #Residential Eviction Orders in 2017 with duplicates

residentialEvictiontable_2017 <- residentialEvictiontable_2017_withDups[!duplicated(residentialEvictiontable_2017_withDups),] #Residential Eviction Orders in 2017 with no duplicates******
#Something is up with some of John Villanueva's evictions. He will list the same eviction twice
duplicates <- residentialEvictiontable_2017_withDups[duplicated(residentialEvictiontable_2017_withDups),] #LOOK INTO THIS

zips <- data.frame(table(residentialEvictiontable_2017$EVICTION_ZIP))
colnames(zips) <- c('Zip.Code', 'evictions')

zipCodePop <- read.csv("C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/Marshal Evictions/New York Population by Zip Code from 2010 U.S. Census.csv") #Imports NYS zip code populations from the U.S. Census

zipCodePop$Zip.Code <- as.numeric(str_extract(zipCodePop$Zip.Code, "[0-9]{5}")) #cleans the string so we're just working with the zip code numbers

zipEvicandPop <- merge(zips, zipCodePop, by = "Zip.Code", all.x = TRUE) #merges tables based on common zip codes

export <- toJSON(zipEvicandPop) #converts dataframe to json format

write(export, 'C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/Marshal Evictions/zipCodeStats.json')


"C:\Users\aaron\Desktop\mar"