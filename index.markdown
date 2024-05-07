---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

    body{
        font-family: "Rubik", sans-serif;
    }

    .page-heading{
        display: none;
    }

    iframe{
        border: none;
    }

    .site-header, .site-footer{
        background-color:black;
        border: none;
    }

    .site-header * , .site-footer *, .site-title {
        color: white;
    }

    .site-title{
        color: white !important;
        font-weight: 500;
        font-size: 20px;
    }

    .figure img{
        border-radius: 20px;
    }

    .figcaption{
        padding: 10px 0px 0px 20px;
        font-style: italic;
    }

    .split-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .split-container .figure, .split-container p {
        width: 50%;
    }
</style>


# Behind the Numbers: A Data-Driven Journey Through NYC's Arrests and Events

<figure class="figure">
    <img src="/assets/images/new-york-city.jpg" width="100%" height="auto"/>
    <figcaption class="figcaption">Image source: <a href="https://unsplash.com/de/@hannahbusing?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hannah Busing</a> auf <a href="https://unsplash.com/de/fotos/luftbild-von-stadtischen-gebauden-0V6DmTuJaIk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </figcaption>
</figure>

In the bustling metropolis of New York City, a rich tapestry of events unfolds daily, from cultural festivals to sporting spectacles. Yet, beneath the surface of these vibrant gatherings lies a complex interplay between celebration and law enforcement. Join us on a data-driven exploration as we delve into the heart of NYC’s arrests and events.

## A Glimpse Behind the Numbers: Real People, Real Impact

Before we embark on our data-driven exploration, let's take a moment to hear the stories of individuals whose lives have intersected with law enforcement at public gatherings. From impassioned protests to peaceful demonstrations, these encounters offer a glimpse into the human impact of arrests in our city.

One recent example is the incident at Columbia University, where police cleared a building and arrested dozens of protesters. According to reports from The New York Times, tensions flared as demonstrators voiced their opposition to university policies, leading to a standoff with law enforcement. As arrests were made and individuals were escorted from the premises, emotions ran high, underscoring the intensity and volatility of such encounters. [See the full NY Times article](https://www.nytimes.com/live/2024/04/30/nyregion/columbia-protests-college).

As we listen to the voices of those directly affected by these events, we're reminded of the complex dynamics at play and the profound consequences that can result from interactions between people and law enforcement.

## The Data Landscape (04.01.2008 until 31.12.2023)

Now, let's shift our focus to the broader data landscape of NYC's arrests and events. While political protests may capture headlines and public attention, what if we broaden our lens to examine other types of gatherings? Could events like farmers markets or street festivals also impact arrest rates? Let's explore the spectrum of public events and discern trends within arrest data to gain a comprehensive understanding of law enforcement activity in our city.

### The Spectrum of Public Events

New York City pulsates with an array of public events, ranging from block parties to farmers markets in neighborhood squares. These gatherings serve as cultural touchstones, uniting residents and visitors alike in shared experiences that reflect the city’s diversity and dynamism.

#### Events over time

<figure class="figure">
   <img src="/assets/images/distribution_events_over_time.png" width="100%" height="auto"/>
    <figcaption class="figcaption">Figure 1: Distribution of events over time
  </figcaption>
</figure>

<div class="split-container">
    <figure class="figure">
        <img src="/assets/images/seasonal_pattern_events.png" width="100%" height="auto">
        <figcaption class="figcaption">Figure 2: Seasonal pattern of events</figcaption>
    </figure>
    <p>Until 2022, the number of events in NYC had been steadily increasing year over year. However, the emergence of the COVID-19 pandemic in 2020 resulted in widespread cancellations and restrictions, leading to a significant decrease in events during that period. Although some events resumed as restrictions eased, the overall number remained lower than pre-pandemic levels. In 2023, the number of events experienced a further drop, reflecting ongoing concerns and uncertainties surrounding public gatherings. <br><br> Public gatherings often exhibit seasonal patterns, with an increase in events during the summer months and fewer events during the winter.</p>
</div>

#### Events by neighborhood and type

<figure class="figure">
    <iframe src="/assets/embeds/event_counts_map" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 3: Interactive map of events per neighborhood
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/event_count_by_type_and_borough" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 4: Interactive graph that illustrates number of events by type and neighborhood
  </figcaption>
</figure>

### Arrest Trends and Patterns

Behind the headlines and crime reports lie patterns within arrest data that offer insights into law enforcement activity across the city. By analyzing arrest rates, demographics, and crime trends, we uncover the underlying dynamics shaping NYC’s public safety landscape.

<figure class="figure">
   <img src="/assets/images/arrests_over_time.png" width="100%" height="auto"/>
    <figcaption class="figcaption">Figure 5: Arrests over time
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/event_counts_map" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 6: Interactive map of arrests per neighborhood
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/arrest_count_by_offense_and_borough" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 7: Interactive graph that shows number of arrests by offense and neighborhood
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/arrest_count_by_age_and_borough" width="100%" height="550px"></iframe>
    <figcaption class="figcaption">Figure 8: Interactive graph that illustrates number of arrests by age and neighborhood
  </figcaption>
</figure>

### Arrests and Events
Within the realm of public events, arrests represent a nuanced intersection of celebration and security. From minor infractions to more serious offenses, arrests at events underscore the challenges faced by law enforcement in balancing public order with the preservation of civil liberties.

<figure class="figure">
    <iframe src="/assets/embeds/correlation_analysis_borough_event_arrest" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 9: Interactive map to explore correlation between arrests and event types per neighborhood
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/correlation_event_arrest_borough" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 10: Interactive map to explore correlation between event type and arrest count by neighborhood
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/correlation_events_arrest_rate" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 11: Interactive map to explore correlation between event type and arrest count by neighborhood
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/correlation_temporal_analysis" width="100%" height="400px"></iframe>
    <figcaption class="figcaption">Figure 12: Interactive temporal analysis of events and arrests
  </figcaption>
</figure>


<figure class="figure">
    <iframe src="/assets/embeds/map_output" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 13: Interactive heatmap with event locations and arrest count per location
  </figcaption>
</figure>

## Conclusion

As we conclude our data-driven journey through NYC’s arrests and events, we acknowledge the intricate web of factors that shape public safety in our city. While our analysis may not have revealed a direct correlation between events and arrests, it has provided valuable insights into the broader landscape of law enforcement activity.

Through the lens of data, we have uncovered patterns and trends within arrest data, offering a deeper understanding of the dynamics at play in our city streets. From demographic disparities to shifts in crime rates, these insights serve as a foundation for informed decision-making and targeted interventions aimed at enhancing public safety.

While arrests at events represent a focal point of our analysis, they are but one piece of the puzzle. By examining the spectrum of public gatherings and discerning patterns within arrest data, we gain a more holistic view of the challenges and opportunities facing our communities.

