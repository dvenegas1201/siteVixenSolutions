import React, { Component, PropTypes } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="pages-stack">
                <div className="page" id="page-home">
                    <header className="bp-header cf">
                        <span className="bp-header__present">Blueprint <span className="bp-tooltip bp-icon bp-icon--about" data-content="The Blueprints are a collection of basic and minimal website concepts, components, plugins and layouts with minimal style for easy adaption and usage, or simply for inspiration."></span></span>
                        <h1 className="bp-header__title">Page Stack Navigation</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <nav className="bp-nav">
                            <a className="bp-nav__item bp-icon bp-icon--prev" href="http://tympanus.net/Blueprints/ZoomSlider/" data-info="previous Blueprint"><span>Previous Blueprint</span></a>
                            <a className="bp-nav__item bp-icon bp-icon--drop" href="http://tympanus.net/codrops/?p=25311" data-info="back to the Codrops article"><span>back to the Codrops article</span></a>
                            <a className="bp-nav__item bp-icon bp-icon--archive" href="http://tympanus.net/codrops/category/blueprints/" data-info="Blueprints archive"><span>Go to the archive</span></a>
                        </nav>
                    </header>
                    <img className="poster" src="images/1.jpg" alt="img01" />
                </div>
                <div className="page" id="page-docu">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Documentation</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "We cannot have peace among men whose hearts find delight in killing any living creature." &mdash; Rachel Carson
                        </p>
                    </header>
                    <img className="poster" src="images/6.jpg" alt="img06" />
                </div>
                <div className="page" id="page-manuals">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Manuals</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "When you adopt a vegan diet we make a connection, you don't go back, it is not a diet, it is a lifestyle." &mdash; Freelee Frugivore
                        </p>
                    </header>
                    <img className="poster" src="images/2.jpg" alt="img02" />
                </div>
                <div className="page" id="page-software">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Software &amp; Downloads</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "I decided to pick the diet that I thought would maximize my chances of long-term survival." &mdash; Al Gore
                        </p>
                    </header>
                    <img className="poster" src="images/3.jpg" alt="img03" />
                </div>
                <div className="page" id="page-custom">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Customization &amp; Settings</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "You have to make a conscious decision to change for your own well-being, that of your family and your country." &mdash;Bill Clinton
                        </p>
                    </header>
                    <img className="poster" src="images/4.jpg" alt="img04" />
                </div>
                <div className="page" id="page-training">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Training &amp; Learning Center</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "The moment I began to understand what was going on with the treatment of animals, it led me more and more in the way of the path I am [on] now, which is a complete vegan." &mdash; Bryan Adams
                        </p>
                    </header>
                    <img className="poster" src="images/5.jpg" alt="img05" />
                </div>
                <div className="page" id="page-buy">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Where to buy</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "When people ask me why I don't eat meat or any other animal products, I say, 'Because they are unhealthy and they are the product of a violent and inhumane industry.'" &mdash;
                        </p>
                    </header>
                    <img className="poster" src="images/6.jpg" alt="img06" />
                </div>
                <div className="page" id="page-blog">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Blog &amp; News</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "The question is not, 'Can they reason?' nor, 'Can they talk?' but rather, 'Can they suffer?" &mdash; Jeremy Bentham
                        </p>
                    </header>
                    <img className="poster" src="images/1.jpg" alt="img01" />
                </div>
                <div className="page" id="page-contact">
                    <header className="bp-header cf">
                        <h1 className="bp-header__title">Contact</h1>
                        <p className="bp-header__desc">Based on Ilya Kostins Dribbble shot <a href="https://dribbble.com/shots/2286042-Stacked-navigation">Stacked navigation</a></p>
                        <p className="info">
                            "Man is the only animal that can remain on friendly terms with the victims he intends to eat until he eats them." &mdash; Samuel Butler
                        </p>
                    </header>
                    <img className="poster" src="images/4.jpg" alt="img04" />
                </div>
            </div>
        );
    }
}

export default Page;
