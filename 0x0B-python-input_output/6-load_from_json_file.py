#!/usr/bin/python3
"""This can Defines a JSON file-reading function."""
import json


def load_from_json_file(filename):
    """It also Creates a Python object from a JSON file."""
    with open(filename) as f:
        return json.load(f)
