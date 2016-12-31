import React, { Component } from 'react';


class BlogEntries extends Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: [],
			order: true
		}
		this.sort = this.sort.bind(this)
	}
	sort() {
		let currentOrder = this.state.entries.slice();
		let newOrder = currentOrder.reverse();
		this.setState({
			entries: newOrder,
			order: !this.state.order
		});
	}
	componentWillMount() {
		this.setState({
			entries: this.props.entries
		});
	}
  render() {
		var content = this.state.entries.map(function(entry) {
		function createMarkup() {
			return {__html: entry.text};
		}
		return (
				<div key = {entry.date}>
					<h1 className = "entryTitle">{entry.title}</h1>
					<p className = "entrySubtitle">{entry.subtitle}</p>
					<div className = "contentText" dangerouslySetInnerHTML={createMarkup()} />
					<hr />
				</div>
			);
  	});

		let sorter = <i className = "fa fa-arrow-up" aria-hidden = "true"></i>

		if (this.state.order) {
			sorter = <i className = "fa fa-arrow-down" aria-hidden = "true"></i>
		}
  	
    return (
    	<div>
    		<div onClick = {this.sort} className = "sortDiv">Toggle Sort Direction {sorter}</div>
    		<div className = "entriesComponent">
					{content}
      	</div>
      	<h1 className = "toTop"><a href="#"><i className = "fa fa-arrow-up" aria-hidden = "true"></i> Return to Top <i className = "fa fa-arrow-up" aria-hidden = "true"></i></a></h1>
    	</div>
    );
  }
}

export default BlogEntries;