#!/usr/bin/python3
"""This Defines a class MyInt that inherits from int."""


class MyInt(int):
    """This Invert int operators == and !=."""

    def __eq__(self, value):
        """Override == opeartor with != behavior."""
        return self.real != value

    def __ne__(self, value):
        """Override != operator with == behavior."""
        return self.real == value
