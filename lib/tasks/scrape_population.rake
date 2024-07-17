require 'nokogiri'
require 'open-uri'

namespace :scrape do
  desc "Scrape population data from Worldometers"
  task population: :environment do
    url = 'https://www.worldometers.info/world-population/population-by-country/'
    doc = Nokogiri::HTML(URI.open(url))
    doc.css('table#example2 tbody tr').each do |row|
      name = row.css('td')[1].text.strip
      population = row.css('td')[2].text.strip.gsub(',', '').to_i
      Country.create(name: name, population: population)
    end
    puts "Scraping completed!"
  end
end
