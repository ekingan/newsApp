var React = require('react');
var Article = require('./Article.jsx');

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				articles: [
					{ title: 'Women in Tech',
						subtitle: 'Will they take over the world?',
						content: 'With the rise of the digital economy, many low- and middle-income countries face an obstacle: a shortage of qualified people to fill critical information and communication technology (ICT) jobs, a gap that is exacerbated by the low representation of women in these industries.',
						images: ['http://womenonit.com/wp-content/uploads/2014/12/women-in-tech.jpg', 'http://static1.squarespace.com/static/5575ed06e4b019b0586d393c/5633f4fee4b0e41cc45eb923/5633f507e4b0927738a1d1bd/1446245648495/Women+In+Tech+-+99.jpg', 'http://www.trbimg.com/img-5633e094/turbine/ct-stock-photos-women-of-color-in-tech-bsi-20151102'],
						location: 'Portland, Oregon',
						imgIcon: 'http://m.c.lnkd.licdn.com/mpr/mpr/p/3/005/085/12c/33856bf.jpg'
						},
					{
						title: 'Climate Change',
						subtitle: 'How hot can we handle?',
						content: 'Back in 2003 a devastating heatwave rippled across Europe, causing the hottest summer on the continent since at least the year 1540. The sweltering heat caused a drought, a crop shortfall, and a death toll of more than 70,000. Now, a new study in Environmental Research Letters estimates that hundreds of those deaths can be blamed on manmade climate change—with roughly 500 deaths in Paris and 60 deaths in London directly attributable to the fact that the heatwave was made substantially worse by global warming. Overall, the study concludes that climate change increased the risk of heat-related death by 20 percent in London and 70 percent in Paris.',
						images: ['http://climate.nasa.gov/system/internal_resources/details/original/103_shutterstock_88550854-740px.jpg',
											'http://www.takepart.com/sites/default/files/styles/feature_article_landscape/public/climatechangeflashcard_0_0.jpg?itok=wikhUVqE',
											'http://az616578.vo.msecnd.net/files/2016/04/10/6359591808606676321504391401_csm_melting-ice-polar-bear-on-2063111_16391916d7.jpg'],
						location: 'Washington DC, USA',
						imgIcon: 'https://www.edx.org/sites/default/files/styles/course_video_banner/public/course/image/featured-card/climate1x_banner.jpg?itok=CwCZStiP'

					}
			]
		};
	}

	render () {
		var articles = this.state.articles.map(function(article, key) {
			return (
				<Article key={key} 
									title={article.title} 
									subtitle={article.subtitle}
									content={article.content}
									images={article.images}
									location={article.location}
									imgIcon={article.imgIcon}
				/>

				);
		});

		return(
			<div>
				{articles}
			</div>

			);
	}

}

module.exports = News;