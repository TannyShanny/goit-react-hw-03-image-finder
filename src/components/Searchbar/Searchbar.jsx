import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: "",
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    const { onSubmit } = this.props;
    onSubmit(search);
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <header className={styles.Searchbar}>
          <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={styles.SearchFormInput}
              type="text"
              onChange={this.onChange}
              value={search}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;
