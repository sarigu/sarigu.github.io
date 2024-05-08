---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<style>
   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

    body{
      font-family: "DM Sans", sans-serif;
      color: #272626;
      letter-spacing: 0.6px;
    }

    .wrapper{
      max-width: 900px;
    }

    .page-heading{
        display: none;
    }

    h1, h2{
      padding-top: 30px;
      font-weight: 500 !important;
    }

    h3, h4, h5{
       padding-top: 20px;
       font-weight: 500 !important;
    }

    iframe{
        border: none;
    }

    .site-header, .site-footer{
      background-color: #272626;
      border: none;
    }

    .site-header{
        padding: 10px;
    }

    .site-header * , .site-footer *, .site-title, .site-nav .page-link {
        color: white;
    }

    .site-title{
        color: white !important;
        font-weight: 500;
        font-size: 20px;
        letter-spacing: 1px;
    }

    .figure img{
        border-radius: 20px;
    }

    .figcaption{
        padding: 10px 0px 10px 20px;
        font-style: italic;
    }

    .hero-image{
      height: 450px;
      object-fit: cover;
    }

    .split-container {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .split-container .figure, .split-container p {
        width: 50%;
    }

      blockquote{
        font-style: normal;
        font-size: 16px;
        color: #272727;
        border-radius: 5px;
        padding: 10px;
        border-left: 4px solid #b3b3b3;
        background-color: #e6e6e6;
        letter-spacing: 0.6px;
    }

</style>


# Behind the numbers: A data-driven journey through NYC's arrests and events

<figure class="figure">
    <img src="/assets/images/new-york-city.jpg" width="90%" height="auto" class="hero-image"/>
    <figcaption class="figcaption">Image source: <a href="https://unsplash.com/de/@hannahbusing?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hannah Busing</a> auf <a href="https://unsplash.com/de/fotos/luftbild-von-stadtischen-gebauden-0V6DmTuJaIk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </figcaption>
</figure>

In the bustling city of New York, a rich mix of events unfolds daily, from cultural festivals to sporting spectacles. Yet, beneath the surface of these vibrant gatherings lies a complex interplay between celebration and law enforcement. Join us on a data-driven exploration as we delve into the heart of NYC’s arrests and events.

## A glimpse behind the numbers: Real people, real impact

Before diving into our data-driven exploration, let’s pause to explore the experiences of individuals whose lives have intersected with law enforcement during public gatherings. These encounters serve as  windows into the human impact of arrests in our cities, particularly among politically charged events like below.

> At Columbia University in Manhattan, a recent incident unfolded where police officers in riot gear detained over 100 students engaged in a non-violent demonstration in solidarity with Palestine. The protest involved camping students advocating for their universities to support a ceasefire in Gaza and divest from companies with ties to Israel. Columbia University called upon law enforcement for the second time following the vandalism and blockade of Hamilton Hall. Emotions ran high during the arrests, highlighting the intensity of the situation. Furthermore, the incident sparked subsequent protests against the university president's decision to involve the police in the pro-Palestinian encampment demonstration. [See the full The Guardian article](https://www.theguardian.com/us-news/2024/apr/22/columbia-university-protests-shutdown).

As we listen to the narratives of those directly involved in these incidents, we are reminded of the complexities at play and the profound effects of interactions between individuals and law enforcement.

## The data landscape

Now, let's shift our focus to the broader data landscape of NYC's arrests and events. While political protests may capture headlines and public attention, what if we broaden our lens to examine other types of gatherings? Could events like farmers markets or street festivals also impact arrest rates? Let's explore the spectrum of public events and discern trends within arrest data to gain a comprehensive understanding of law enforcement activity in New York.

**Key information:**

* 📍 We look at **New York City**
* 🗓️ We look at arrests and events between **04.01.2008 and 31.12.2023**
* 👮 We look at **4916215** arrests
* 🥬 We look at **127524** events

### Understanding NYC events: Trends and patterns

New York City hosts an array of public events, ranging from block parties to farmers markets in neighborhood squares. These gatherings serve as cultural touchstones, uniting residents and visitors alike in shared experiences that reflect the city’s diversity and dynamism. As the years have gone by, the citizens of New York have become more active in the community which can be seen from the rise of overall events during this period in time, as witnessed in Figure 1.

#### Events over time

<figure class="figure">
   <img src="/assets/images/distribution_events_over_time.png" width="90%" height="auto"/>
    <figcaption class="figcaption">Figure 1: Distribution of events over time
  </figcaption>
</figure>

Until 2022, the number of events in NYC had been steadily increasing year over year. However, the emergence of the COVID-19 pandemic in 2020 resulted in widespread cancellations and restrictions, leading to a significant decrease in events during that period. Although some events resumed as restrictions eased, the overall number remained lower than pre-pandemic levels. In 2023, the number of events experienced a further drop, reflecting ongoing concerns and uncertainties surrounding public gatherings.

Public gatherings often exhibit seasonal patterns, with an increase in events during the summer months and fewer events during the winter.

<div class="split-container">
    <figure class="figure">
        <img src="/assets/images/seasonal_pattern_events_1.png" width="100%" height="auto">
        <figcaption class="figcaption">Figure 2: Seasonal pattern of events</figcaption>
    </figure>
      <figure class="figure">
        <img src="/assets/images/seasonal_pattern_events_2.png" width="100%" height="auto">
    </figure>
</div>

#### Events by neighborhood and type
Many people are probably familiar with the names such as "Manhattan", "Brooklyn" and "Queens". These names arent just arbritrary areas in New York but actually map out a five-split city. From Figure 3 it can be seen how these different boroughs are related to the events that are being held in the city. Manhattan is the most popular for events, and Staten Island has a marginal amount of the total amount of events throughout all of New York during this time period. 
<figure class="figure">
    <iframe src="/assets/embeds/event_counts_map" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 3: Interactive map of events per neighborhood
  </figcaption>
</figure>
As mentioned earlier, there are a big variety of events, but how does the distribution look between these categories of events and the boroughs? This can be interactively investigated in Figure 4. Here you can zoom in by brushing over the plot, and visualize the peaks for the select event types, or the lack hereof! Across the plot, it seems that Manhattan has a tendency to be the leading borough for most types of events. But for the event type of [Block Party](https://en.wikipedia.org/wiki/Block_party), it's actually clearly Brooklyn that hosts the majority.
<figure class="figure">
    <iframe src="/assets/embeds/events_by_type_borough" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 4: Interactive graph that illustrates number of events by type and neighborhood
  </figcaption>
</figure>

### Analyzing arrest data: insights

Behind the headlines and crime reports lie patterns within arrest data that offer insights into law enforcement activity across the city. By analyzing arrest rates, demographics, and crime trends, we uncover the underlying dynamics shaping NYC’s public safety landscape.

<figure class="figure">
   <img src="/assets/images/arrests_over_time.png" width=100%" height="auto"/>
    <figcaption class="figcaption">Figure 5: Arrests over time
  </figcaption>
</figure>

Contrary to the trend observed with events, the number of arrests in NYC had been steadily decreasing. However, the advent of COVID-19 resulted in a notable reduction in arrests. Subsequently, as law enforcement adapted to new challenges and priorities, arrests began to slowly increase, although they generally remained at a lower level compared to pre-COVID times.

<div class="split-container">
    <figure class="figure">
        <img src="/assets/images/seasonal_pattern_arrests_1.png" width="100%" height="auto">
        <figcaption class="figcaption">Figure 6: Seasonal pattern of arrests</figcaption>
    </figure>
     <figure class="figure">
        <img src="/assets/images/seasonal_pattern_arrests_2.png" width="100%" height="auto">
    </figure>
</div>

Remember earlier when we looked at the boroughs and the events that has occurred within? Manhattan was the borough that hosts the most events, but how about the arrests that has occurred throughout the city? Can we expect there to be more or less arrests following events? Figure 6 shows a map of New York again, but here we can take away that it is actually Brooklyn that has the most arrests registered for the time period, despite not being the borough with the most events.
<figure class="figure">
    <iframe src="/assets/embeds/arrest_counts_map" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 6: Interactive map of arrests per neighborhood
  </figcaption>
</figure>

By being more curious as to what sort of felonies or misdemeneanors we inspect Figure 7. One example of a takeaway from this figure is that the types of crimes people have been arrested for the most, in Manhatten, are all related to Larceny / Theft. This begs further questions such as if this type of crime is more prevalent in upper state neighborhoods in general.

<figure class="figure">
    <iframe src="/assets/embeds/arrests_by_offense_borough" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 7: Interactive graph that shows number of arrests by offense and neighborhood
  </figcaption>
</figure>

The data that this investigation is based upon holds more information that can be utilized. It is not necessarily information that proves important to the questions that you might have, but how would you know, if you didnt know that the information was there to begin with? For each arrest, the age group of the arrested individual is listed. Figure 8 shows that the distribution of individuals being arrested for crimes is somewhat identical throughout all of New York. Further analysis on this topic could perhaps show what sorts of crime that the different age groups are most likely to commit (be arrested for), and in the long run, which events these individuals in the specific age categories are attracted to.
<figure class="figure">
    <iframe src="/assets/embeds/arrests_by_age_borough" width="100%" height="550px"></iframe>
    <figcaption class="figcaption">Figure 8: Interactive graph that illustrates number of arrests by age and neighborhood
  </figcaption>
</figure>

### Intersecting data: Exploring the relationship between events and arrests
Within the realm of public events, arrests represent a nuanced intersection of celebration and security. From minor infractions to more serious offenses, arrests at events underscore the challenges faced by law enforcement in balancing public order with the preservation of civil liberties. As an extension to earlier mentioned temporal analyses, Figure 9 shows simply the trends of the arrests and the events side by side. For the monthly view, events seem more prevalent in the summer and autumn months, whereas there seem to be less arrests, and potentially less crime in the winter months. As the yearly view would show, both events and arrests have diminished during the periods of COVID-19. 

<figure class="figure">
    <iframe src="/assets/embeds/temporal analysis_months" width="100%" height="600"></iframe>
    <figcaption class="figcaption">Figure 8: Interactive temporal analysis of events and arrests per month
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/temporal analysis_years" width="100%" height="600"></iframe>
    <figcaption class="figcaption">Figure 9: Interactive temporal analysis of events and arrests per year
  </figcaption>
</figure>

The motivation for doing this investigation has been to shed some light on the relation between events and the crimes commited in the same area on the same days. The ideal findings would also include if crime would increase in the days after an event, perchance because the crime was lessened during the event itself. Figures 10 and 11 try to put some numbers on this, by looking at the correlation between an event on a given day for a borough, and the crimes committed in this borough. These areas are rather large, and thus the relationsships concluded from these figures needs to be further worked upon to truly have a saying in itself. A positive correlation would suggest that as the number of permitted events increases in a particular location, there tends to be an increase in crime rates in that location over time. On the other hand, a negative correlation would suggest that as the number of permitted events increases, crime rates tend to decrease. Together with the correlation values, is also displayed the actual count of events and or arrests, such that you the beholder can take those into account when thinking critically of the correlation values, and not be swayed by high correlation on very few incidents. (We at DTU are observant of statistical importance!).
<figure class="figure">
    <iframe src="/assets/embeds/correlation_arrests_event_typesby_borough" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 10: Interactive map to explore correlation between arrests and event types per neighborhood
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/correlation_arrests_borough_by_event_types" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 11: Interactive map to explore correlation between event type and arrest count by neighborhood
  </figcaption>
</figure>

Earlier we looked at the maps showcasing the total number of events and the total number of arrests across the different boroughs in New York City. We aired the idea that perhaps, because Manhattan hosts a proportionally large amount of events, it would also be impacted by more crime. Across the different boroughs however, we find it important to visually show that the correlations on this matter are marginal as can be seen from Figure 12.
<figure class="figure">
    <iframe src="/assets/embeds/correlation_events_arrest_rate" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 12: Interactive map to explore correlation between event counts and arrest count by neighborhood
  </figcaption>
</figure>

Map visualizations are invaluable tools for understanding the complex interplay between arrests and events in New York City. By overlaying arrest data onto a map alongside event locations, these visualizations offer a perspective on the dynamics of the New Yorker Life life. They provide crucial insights into the spatial distribution of arrests in relation to various types of events. Map visualizations enhance transparency and accountability by allowing us to see firsthand how law enforcement activities intersect with community events. Figure 13 shows combined data from events and arrests to show side by side how arrests are distributed, using heatmaps, together with the events showcased as hoverable markers, for interactive investigation.
<figure class="figure">
    <iframe src="/assets/embeds/map_output" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 13: Interactive heatmap with event locations and arrest count per location
  </figcaption>
</figure>

<figure class="figure">
    <iframe src="/assets/embeds/map_2022" width="100%" height="650px"></iframe>
    <figcaption class="figcaption">Figure 14: Arrests within the vicinity of events
  </figcaption>
</figure>

## Conclusion

As we conclude our data-driven journey through NYC’s arrests and events, we acknowledge the intricate web of factors that shape public safety in our city. While our analysis may not have revealed a direct correlation between events and arrests, it has provided valuable insights into the broader landscape of law enforcement activity.

Through the lens of data, we have uncovered patterns and trends within arrest data, offering a deeper understanding of the dynamics at play in our city streets. From demographic disparities to shifts in crime rates, these insights serve as a foundation for informed decision-making and targeted interventions aimed at enhancing public safety.

While arrests at events represent a focal point of our analysis, they are but one piece of the puzzle. By examining the spectrum of public gatherings and discerning patterns within arrest data, we gain a more holistic view of the challenges and opportunities facing our communities.

