library(dplyr)
install.packages("jsonlite")
library(jsonlite)
library(stringr)
evictionTable <- read.csv("C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/marshalEvictionData/Evictions.csv") #imports marshal eviction data CSV. Change this to your file path
evictionTable$EXECUTED_DATE <- as.Date(evictionTable$EXECUTED_DATE, format = "%m/%d/%Y") #changes the executed date type from factor to date. this will allow for better manipulations.

commercialEvictions <- evictionTable[evictionTable$RESIDENTIAL_COMMERCIAL_IND == "Commercial",] #Only Commercial Evictions
residentialEvictions <- evictionTable[evictionTable$RESIDENTIAL_COMMERCIAL_IND != "Commercial",] #Only Residential Evictions

residentialEvictiontable_2017_withDups <- residentialEvictions[residentialEvictions$EXECUTED_DATE >= "2017-01-01" & residentialEvictions$EXECUTED_DATE <= "2017-12-31",] #Residential Eviction Orders in 2017 with duplicates

residentialEvictiontable_2017 <- residentialEvictiontable_2017_withDups[!duplicated(residentialEvictiontable_2017_withDups),] #Residential Eviction Orders in 2017 with no duplicates******
#Something is up with some of John Villanueva's evictions. He will list the same eviction twice
duplicates <- residentialEvictiontable_2017_withDups[duplicated(residentialEvictiontable_2017_withDups),] #LOOK INTO THIS

evicZips <- data.frame(table(residentialEvictiontable_2017$EVICTION_ZIP)) #creates a new table with all the zip codes with evictions and the number of evictions in each
colnames(evicZips) <- c('Zip.Code', 'evictions') #rename columns

masterZips <- read.csv("C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/marshalEvictionData/NYSzips.csv") #master list of every zip code in NYS
#zipandCounty <- read.csv("C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/marshalEvictionData/Zip and County.csv")
#zipandCounty <- zipandCounty[zipandCounty$County.Name %in% c("New York", "Kings", "Bronx", "Queens", "Richmond"),]

masterZips <- merge(masterZips, evicZips, by = "Zip.Code", all.x = TRUE) #merges basted based on common zip codes


zipPops <- read.csv("C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/marshalEvictionData/New York Population by Zip Code from 2010 U.S. Census.csv") #Imports NYS zip code populations from the U.S. Census

zipPops$Zip.Code <- as.numeric(str_extract(zipPops$Zip.Code, "[0-9]{5}")) #cleans the string so we're just working with the zip code numbers

masterZips <- merge(masterZips, zipPops, by = "Zip.Code", all.x = TRUE) #merges tables based on common zip codes

masterZips[is.na(masterZips)] <- 0 # sets all na values equal to zero

export <- toJSON(masterZips) #converts dataframe to json format

write(export, 'C:/Users/aaron/OneDrive/Documents/Columbia Journalism/Universal Access to Counsel/marshalEvictionData/zipCodeStats.json')



