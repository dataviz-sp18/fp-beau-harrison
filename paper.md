# Data Viz - Final Paper - Beau Harrison

My initial motivation for this project was inspired by GovTrack's visualization of their ideology versus leadership scores. I like the idea of comparing representatives on a relative scale, but I imagined a site that presented many dimensions allowing many different comparisons. While investigating existing solutions I came across a blog post by Alberto Cairo praising a visualization from Gramener. This visualization, while unconventional, is engaging. I wanted to take this unique visual and give the arc position purpose and other polish to aid in interpreting the plot.

Because I adopted this visualization from Gramener, I used their tools. This visualization was made for the browser using d3js and SVG graphics. This combination of tools made it simple to programmatically draw circles and add points in a polar plane. The interactivity adds to the engagement and encourages exploration. The colors are pleasing and representative of the US parties. It leans on the relative radius and arc distances as mediums for conveying the data.

The easiest way to not be truthful is by hiding data. I haven't done the best job of explaining the scores from each of my sources. By describing the processes in more detail, anyone can get at the heart of what is to be discovered. That being said, both the scores are relative metrics. Commonly untruthful visualizations will misrepresent the truth by using axes to distort magnitude or relative scale.  Because the scores are relative, the adjacency of points is the key to interpreting this visualization. In fact, I think the polar coordinates are an intuitive way to see how all things are related to a single object in the middle.

Some people have argued that because the polar coordinates are not necessary to displaying this data that cartesian coordinates must be better. I understand this argument, but I feel it's a very rigid interpretation of Cairo's rules and underestimates our intuitive abilities. I will likely look to polar coordinates in the future for displaying relative measures.

My favorite feature of this chart and the original reason I pursued it was due to its beauty. It has a draw that the cartesian version doesn't have.

This graphics aids in portraying relative performance of Senators. The scores allow citizens to easily compare representatives.

This could be a critical tool for decision making voters. I hope to expand this tool to provide more enlightening content.

Few legislators are headlines makers. Many people struggle to measure the success of their representatives. This tool lets constituents compare their elected official to others. Providing this relative measure gives voters context for their Senator's voting behaviors. On a grander scale, you can see the macroscopic group voting that is happening in the Senate.

As a part of improving this visualization, I would like to follow up on Cairo's suggestion of including the party average as well as replicating the effort to show the House. To make this a real tool I will need to find data sources that can regularly be queried and are dynamically updated so that the data is never out of date.