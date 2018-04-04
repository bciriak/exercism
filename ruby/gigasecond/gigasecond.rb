class Gigasecond
  def from(time)
    lifetime = 1000000000

    seconds_to_date(lifetime)
  end

  def seconds_to_date(seconds)
    minute_in_seconds = 60
    hour_in_seconds = minute_in_seconds * 60
    day_in_seconds = hour_in_seconds * 24
    month_in_seconds = day_in_seconds * 30
    year_in_seconds = month_in_seconds * 12

    years = (seconds / year_in_seconds).floor
    years_reminder = seconds % year_in_seconds
    months = (years_reminder / month_in_seconds).floor
    months_reminder = years_reminder % month_in_seconds
    days = (months_reminder / day_in_seconds).floor
    days_reminder = months_reminder % day_in_seconds
    hours = (days_reminder / hour_in_seconds).floor
    hours_reminder = days_reminder % hour_in_seconds
    minutes = (hours_reminder / minute_in_seconds).floor
    minutes_reminder = hours_reminder % minute_in_seconds
    seconds = minutes_reminder

    puts seconds
  end

end

gs = Gigasecond.new
gs.from("hi")
