import * as React from "react";
import { useState, useEffect } from "react";

/* HOOK REACT EXAMPLE */
/*const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">My Blog!</h1>
		</main>
	);
};

interface AppProps {}*/

//CLASS REACT EXAMPLE
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  async componentDidMount() {
    try {
      let r = await fetch("/api/blogs");
      let blogs = await r.json();
      this.setState({ blogs });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">My Blogs</h1>
        <div className="card">
          <div className="card-body"></div>
        
        <ul className="list-group">
          {this.state.blogs.map((blogs) => {
            return <li className="list-groupt-item">{blogs.id},{blogs.content},{blogs.title},{blogs.author}</li>;
			
			
          })}
        </ul>
		</div>
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  blogs: Array<{ id: number; content: string; title: string; author: string }>;
}

export default App;
