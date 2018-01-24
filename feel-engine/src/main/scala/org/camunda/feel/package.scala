package org.camunda

import scala.math.BigDecimal
import java.time._
import java.time.format._
import java.time.temporal.ChronoField._
import org.slf4j.LoggerFactory
import java.util.regex.Pattern

/**
 * @author Philipp Ossler
 */
package object feel {
  
  //// common
  
  val logger = LoggerFactory.getLogger("org.camunda.feel.FeelEngine")
  
  //// type definitions
  
  type Number = BigDecimal

  type Date = java.time.LocalDate

  type LocalTime = java.time.LocalTime

  type LocalDateTime = java.time.LocalDateTime

  type Time = java.time.OffsetTime

  type DateTime = java.time.ZonedDateTime

  type YearMonthDuration = java.time.Period

  type DayTimeDuration = java.time.Duration

  //// string to type conversions
  
  import scala.language.implicitConversions

  implicit def stringToNumber(number: String): Number = BigDecimal(number)

  implicit def stringToDate(date: String): Date = LocalDate.parse(date, dateFormatter)

  implicit def stringToLocalTime(time: String): LocalTime = LocalTime.parse(time, timeFormatterWithOptionalPrefix)

  implicit def stringToTime(time: String): Time = OffsetTime.parse(time, timeFormatterWithOffsetAndOptionalPrefix)

  implicit def stringToLocalDateTime(dateTime: String): LocalDateTime = LocalDateTime.parse(dateTime, localDateTimeFormatter)

  implicit def stringToDateTime(dateTime: String): DateTime = ZonedDateTime.parse(dateTime, dateTimeFormatter)

  implicit def stringToYearMonthDuration(duration: String): YearMonthDuration = Period.parse(duration)

  implicit def stringToDayTimeDuration(duration: String): DayTimeDuration = Duration.parse(duration)

  //// date/time/duration type parsing and formatting
  
  private lazy val datePatter = Pattern.compile("""-?([1-9]\d{0,4})?\d{4}-[01][0-9]-[0-3]\d""")
  
  def isValidDate(date: String): Boolean = datePatter.matcher(date).matches

  private lazy val offsetTimePattern = Pattern.compile("""T?\d{2}:\d{2}:\d{2}(\.\d{1,9})?([+-]\d{2}:\d{2}|Z|@.*)""")
  
  def isOffsetTime(time: String): Boolean = offsetTimePattern.matcher(time).matches
  
  private lazy val offsetDateTimePattern = Pattern.compile("""-?([1-9]\d{0,4})?\d{4}-[01][0-9]-[0-3]\dT[0-2][0-9]:[0-5][0-9](:[0-5][0-9])?(\.\d{1,9})?([+-][01][0-9]:[0-5][0-9]|Z|@.*)""")
  
  def isOffsetDateTime(dateTime: String): Boolean = offsetDateTimePattern.matcher(dateTime).matches

  private lazy val localDateTimePatter = Pattern.compile("""-?([1-9]\d{0,4})?\d{4}-[01][0-9]-[0-3]\dT[0-2][0-9]:[0-5][0-9](:[0-5][0-9])?(\.\d{1,9})?""")
  
  def isLocalDateTime(dateTime: String): Boolean = localDateTimePatter.matcher(dateTime).matches
  
  private lazy val yearMonthDurationPattern = Pattern.compile("""-?P(\d+Y)?(\d+M)?""")
  
  def isYearMonthDuration(duration: String): Boolean = yearMonthDurationPattern.matcher(duration).matches  

  private lazy val dayTimeDurationPattern = Pattern.compile("""-?P((\d+D)?(T(\d+H)?(\d+M)?(\d+(.\d*)?S)?)?)""")
  
  def isDayTimeDuration(duration: String): Boolean = dayTimeDurationPattern.matcher(duration).matches
  
  val timeFormatterWithPrefix = new DateTimeFormatterBuilder()
		.appendLiteral('T')
    .appendValue(HOUR_OF_DAY, 2)
    .appendLiteral(':')
    .appendValue(MINUTE_OF_HOUR, 2)
    .optionalStart()
    .appendLiteral(':')
    .appendValue(SECOND_OF_MINUTE, 2)
    .optionalEnd()
    .appendFraction(NANO_OF_SECOND, 0, 9, true)
    .toFormatter();
	
	val timeFormatterWithOptionalPrefix = new DateTimeFormatterBuilder()
		.optionalStart()
    .appendLiteral('T')
    .optionalEnd()
    .appendValue(HOUR_OF_DAY, 2)
    .appendLiteral(':')
    .appendValue(MINUTE_OF_HOUR, 2)
    .optionalStart()
    .appendLiteral(':')
    .appendValue(SECOND_OF_MINUTE, 2)
    .optionalEnd()
    .appendFraction(NANO_OF_SECOND, 0, 9, true)
    .toFormatter();

	val offsetFormatter = new DateTimeFormatterBuilder()
	  .optionalStart()
		.appendOffsetId()
		.optionalEnd()
    .optionalStart()
    .appendLiteral("@")
    .appendZoneRegionId()
    .optionalEnd()
    .toFormatter();
	
  val timeFormatterWithOffsetAndOptionalPrefix = new DateTimeFormatterBuilder()
		.append(timeFormatterWithOptionalPrefix)
		.append(offsetFormatter)
    .toFormatter();

  val localTimeFormatter = new DateTimeFormatterBuilder()
		.appendValue(HOUR_OF_DAY, 2)
    .appendLiteral(':')
    .appendValue(MINUTE_OF_HOUR, 2)
    .optionalStart()
    .appendLiteral(':')
    .appendValue(SECOND_OF_MINUTE, 2)
    .optionalEnd()
    .appendFraction(NANO_OF_SECOND, 0, 9, true)
    .toFormatter();
  
  val timeFormatter = new DateTimeFormatterBuilder()
    .append(localTimeFormatter)
    .append(offsetFormatter)
    .toFormatter();
  
  val dateFormatter = new DateTimeFormatterBuilder()
    .appendValue(YEAR, 4, 9, SignStyle.NORMAL)
    .appendLiteral("-")
    .appendValue(MONTH_OF_YEAR, 2)
    .appendLiteral("-")
    .appendValue(DAY_OF_MONTH, 2)
    .toFormatter();
    
  val localDateTimeFormatter = new DateTimeFormatterBuilder()
    .append(dateFormatter)
    .append(timeFormatterWithPrefix)
    .toFormatter();
	
  val dateTimeFormatter = new DateTimeFormatterBuilder()
    .append(dateFormatter)
    .append(timeFormatterWithPrefix)
    .append(offsetFormatter)
    .toFormatter();
  
}
