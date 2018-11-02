# Eviction Map For New York City 2017

## Purpose

This map was made as a companion to a series on Right To Counsel in New York City for TheInk. You can find the full story [here](http://wp.me/p6OMlE-QI)

## Data Sources

- The Eviction data comes from [NYC Open Data](https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4/data)
- Population data comes from the [U.S. Census Bureau](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=DEC_10_DP_DPDP1&prodType=table)
- Medium household income data comes from the [U.S. Census Bureau](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=ACS_16_5YR_S1901&prodType=table)

The map was built in [Mapbox](https://www.mapbox.com/), the data for the layers came from the following sources
- Zip Code data came from [Open Data Delaware](https://github.com/OpenDataDE/State-zip-code-GeoJSON) (and the exact [NY State data](https://github.com/OpenDataDE/State-zip-code-GeoJSON/blob/master/ny_new_york_zip_codes_geo.min.json))
- Neighborhood Tabulation Area data came from [Baruch College](http://guides.newman.baruch.cuny.edu/nyc_data/nbhoods)
-
## Built with
The data was cleaned and combined in R and JavaScript. We created a map in [Mapbox](https://api.mapbox.com/styles/v1/willemdehaes/cjnro3cjp25wm2spbjt8tabc9.html?fresh=true&title=true&access_token=pk.eyJ1Ijoid2lsbGVtZGVoYWVzIiwiYSI6ImNqbmdqZ2hnYzAzb3ozd3F0aHcxM29idTkifQ.KCJrgwzjDOeW19ps9wyW2Q#10.0/40.713492/-73.897638/0) and used JavaScript and the Mapbox API to build to popups.

## Authors
[Aaron Brezel](https://github.com/aaronbrezel) - _clean and data population data, eviction data, NYC zip code data, map layout_
[Willem Dehaes](https://github.com/wdehaes) - _map layers, layout & overlays, neighborhood tabulation data_

Amy Singer provided editorial oversight.

