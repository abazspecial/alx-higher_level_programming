#!/usr/bin/python3
"""This Defines a locked class."""


class LockedClass:
    """
    And can Prevent the user from instantiating new LockedClass attributes
    for anything but attributes called 'first_name'.
    """

    __slots__ = ["first_name"]
